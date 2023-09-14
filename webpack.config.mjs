import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

export default {
    mode,
    entry: './src/index.jsx',
    output: {
        path: path.resolve('./build'),
        filename: '[name].[hash].js',
        clean: true,
    },

    resolve: {
        extensions: ['.jsx', '.js'],
        preferAbsolute: true,
    },

    devServer: {
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
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
                                        ? '[path][name]__[local]--[hash:base64:3]'
                                        : '[hash:base64:5]',
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
    ],
};
