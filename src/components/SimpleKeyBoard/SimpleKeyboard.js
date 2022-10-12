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
                layout={{
                    default: [
                        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                        "{tab} q w e r t y u i o p [ ] \\",
                        "{lock} a s d f g h j k l ; ' {enter}",
                        "{shift} z x c v b n m , . / {shift}",
                        ".com @ {space} {downkeyboard}"
                    ],
                    shift: [
                        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                        "{tab} Q W E R T Y U I O P { } |",
                        '{lock} A S D F G H J K L : " {enter}',
                        "{shift} Z X C V B N M < > ? {shift}",
                        ".com @ {space} {downkeyboard}"
                    ]
                }}
                display={{
                    "{downkeyboard}": "🞃",
                    "{enter}": "return"
                }}
            // layout={{
            //     default: [
            //         "q w e r t y u i o p {bksp}",
            //         "a s d f g h j k l {enter}",
            //         "{shift} z x c v b n m , . {shift}",
            //         "{alt} {space} {altright} {downkeyboard}"
            //     ],
            //     shift: [
            //         "Q W E R T Y U I O P {bksp}",
            //         "A S D F G H J K L {enter}",
            //         "{shiftactivated} Z X C V B N M , . {shiftactivated}",
            //         "{alt} {space} {altright} {downkeyboard}"
            //     ],
            //     alt: [
            //         "1 2 3 4 5 6 7 8 9 0 {bksp}",
            //         `@ # $ & * ( ) ' " {enter}`,
            //         "{shift} % - + = / ; : ! ? {shift}",
            //         "{default} {space} {back} {downkeyboard}"
            //     ],
            //     smileys: [
            //         "😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}",
            //         `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
            //         "😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}",
            //         "{default} {space} {altright} {downkeyboard}"
            //     ]
            // }}
            display={{
                "{alt}": ".?123",
                // "{smileys}": "\uD83D\uDE03",
                "{shift}": "⇧ shift",
                "{shiftactivated}": "⇧",
                "{enter}":" ⇦ enter",
                "{bksp}": "⌫ delete",
                "{altright}": ".?123",
                "{downkeyboard}": "⇩ hide",
                "{space}": " ",
                "{default}": "ABC",
                "{back}": "⇦",
                "{tab}": "tab",
                "{lock}": "caps lock",
                "{space}": "space"

            }}
            buttonTheme={[
              
              {
                class: "key-function-keys",
                buttons: "{bksp} {enter} {alt} {smileys} {downkeyboard} {shift} {lock} {tab} "
              },
             
            ]}
            />
        </React.Fragment>
    );
}

//#adb5bb

export { SimpleKeyboard };