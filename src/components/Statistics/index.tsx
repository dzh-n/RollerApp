import st from './statistics.module.scss'
import img_1 from './img/statistics_1.svg'
import img_2 from './img/statistics_2.svg'
import img_3 from './img/statistics_3.svg'

interface InterfaceDate {
	img: any;
	quantity: string;
	title: string
}
const ArrayDate: InterfaceDate[] = [
	{
		img: img_1,
		quantity: 'Прочность и надёжность',
		title: 'Использование специальных армирующих усилителей обеспечивает высокую стабильность конструкции'
	}, {
		img: img_2,
		quantity: 'Защита от шума',
		title: 'Высокая шумоизоляция обеспечивает тишину и спокойствие Вашего дома'
	}, {
		img: img_3,
		quantity: 'Энерго- эффективность',
		title: 'Стабильная многокамерная система с превосходными изолирующими характеристикамии'
	}
]

const Statistics = () => {
	return (<div className={st.statistics_section}>
		<div className={'_container ' + st.statistics} >
			<ul className={st.statistics__wrapper}>
				{ArrayDate.map((el) => <li className={st.statistics__item} >
					<div className={st.statistics__item_body}>
						<div className={st.statistics__img} >
							<img src={el.img} ></img>
						</div>
						<div className={st.statistics__text_bl}>
							<p className={st.statistics__title}>
								{el.quantity}
							</p>
							<p className={st.statistics__text}>
								{el.title}
							</p>
						</div>
					</div>
				</li>)}
			</ul>
		</div>
	</div>)
}

export default Statistics