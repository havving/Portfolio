import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'Java'},
        {id: 2, text: 'C'},
        {id: 3, text: 'Python'},
        {id: 4, text: 'React'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,  // nextID 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1);  // nextId 값에 1을 더한다.
        setNames(nextNames);  // names 값을 업데이트한다.
        setInputText('');  // inputText를 비운다.
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;