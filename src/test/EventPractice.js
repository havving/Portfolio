import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        message: '',
        name: ''
    });
    const { message, name } = form;
    const onChange = e => {
        const nextForm = {
            ...form,    // 기존의 form 내용을 이 자리에 복사한 뒤,
            [e.target.name]: e.target.value   // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(message + ' ' + name);
        setForm({
            message: '',
            name: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="message"
                placeholder="You can type anything."
                value={message}
                onChange={onChange}
            />
            <input
                type="text"
                name="name"
                placeholder="User Name"
                value={name}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>Apply</button>
        </div>
    );
};

export default EventPractice;