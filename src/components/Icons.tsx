/* eslint-disable prettier/prettier */
import React, { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

type IconProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name}:IconProps) => {
    switch (name){
        case 'circle':
            return <Icon name="circle-thin" size={38}  color="#000" />;
        default:
            break;
    }
};

export default Icons;
