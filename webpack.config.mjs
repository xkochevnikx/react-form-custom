import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

export default {
    mode,
    entry: './src/index.jsx',
    output: {
        path: path.resolve('./build'),
        filename: '[name].js',
        asyncChunks: true,
        chunkFilename: '[id].js',
        assetModuleFilename: 'assets/[name][ext]',

        clean: true,
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },

    resolve: {
        extensions: ['.jsx', '.js'],
        preferAbsolute: true,
    },

    devServer: {
        port: 4000,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    mode === 'development'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath) =>
                                    Boolean(resPath.includes('module')),
                                localIdentName:
                                    mode === 'development'
                                        ? '[name]__[local]--[hash:base64:4]'
                                        : '[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                ],
            },
        ],
    },

    devtool:
        mode === 'development' ? 'eval-cheap-module-source-map' : undefined,

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.DefinePlugin({
            mode,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ],
};
