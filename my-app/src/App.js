import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueVaild] = useState(false);

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение');
		if (promptValue !== null) {
			if (promptValue.length > 3) {
				setValue(promptValue);
				setError('');
				setIsValueVaild(true);
				console.log(list);
			} else {
				setError('Введенное значение должно содержать минимум 3 символа');
				setIsValueVaild(false);
			}
		}else {console.log(list)};
		
	};

	const onAddButtonClick = () => {
		const id = Date.now();
		// const updatedList = [...list, { id, value }];
		if (isValueVaild) {
			setValue('');
			setError('');
			setIsValueVaild(false);
			setList((currentList) => [...currentList, { id, value }]);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}> {error} </div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					onClick={onAddButtonClick}
					disabled={!isValueVaild}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 && <p className={styles['no-margin-text']}>Нет добавленных элементов</p>}
				<ul className={styles.list}>
					{list.map((item) => (
						<li key={item.id} className={styles['list-item']}>
							{item.value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
