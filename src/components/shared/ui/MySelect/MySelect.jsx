import { Fragment, memo } from 'react';
import { Listbox } from '@headlessui/react';
import cls from './MySelect.module.css';

export const MySelect = memo((props) => {
    const { selectedService, setSelectedService, services } = props;
    return (
        <Listbox value={selectedService} onChange={setSelectedService}>
            <Listbox.Button className={cls.listButton}>
                {selectedService.name}
            </Listbox.Button>
            <Listbox.Options className={cls.listItemBox}>
                {services.map((service) => (
                    <Listbox.Option
                        key={service.id}
                        value={service}
                        as={Fragment}
                        className={cls.listItem}
                        disabled={service.unavailable}
                    >
                        {({ active, selected }) => (
                            <li className={`${active ? cls.active : null}`}>
                                {service.name}

                                {selected && ' ✓'}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
});
