import React, { useState, useEffect, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';


const SimpleKeyboard = ({ keyboardRef, inputName, layoutName, onChangeAll, onKeyPress, onChangeInput }) => {


    return (
        <React.Fragment>
            <Keyboard
                keyboardRef={keyboardRef}
                inputName={inputName}
                layoutName={layoutName}
                onChangeAll={onChangeAll}
                onKeyPress={onKeyPress}
                onChange={onChangeInput}
            />
        </React.Fragment>
    );
}

export { SimpleKeyboard };