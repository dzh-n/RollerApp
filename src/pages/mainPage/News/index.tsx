import st from './news.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';

interface NewsInterface {
	img: string;
	data: string;
	title: string;
	text: string;
	link: string;
	date: NewsItem
}

interface NewsItem {
	imageItem: string
	titleItem: string
	textItem: string
}
const newsDate: NewsInterface[] = [
	{
		img: '/assets/image/newsImg_1.webp',
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
		link: 'News',
		date: {
			imageItem: '/assets/image/newsItemImage.webp',
			titleItem: 'Окна ROLLER в экстримальных условиях',
			textItem: 'К двум большим юбилеям NURPLAST добавился еще один, «малый» юбилей, пятилетний. Ровно пять лет тому назад окна из профиля NURPLAST оказались там, где климатические условия сравнимы с марсианскими – в ПАМИРЕ. В 2014 году началось строительство памирской ГЭС. К жилым модулям станции предъявляются жёсткие требования: они должны выдерживать очень низкие температуры (порядка минус 60 градусов), противостоять ветру, скорость которого достигает здесь 80 метров в секунду, а также защищать людей от вредного ультрафиолетового излучения, воздействие которого в этих широтах особенно сильно. Важными критериями качества инженерных решений для полярников с самого начала были их энергоэффективность и безопасность. Потому что если вдруг выяснится, что «что-то идёт не так», то отправить на такой специфический объект сервисного техника или подвезти недостающую деталь нет совершенно никакой возможности. Специалисты NURPLAST разработали решение с учётом всех этих непростых требований для оконных блоков станции, которые были изготовлены из профилей системы UNOPEN с использованием стеклопакетов, заполненных криптоном.	«Наш первый сезон прошёл в штатном режиме, все элементы новой станции отработали без проблем, — вспоминает руководитель экспедиции. – В равной степени это касается и окон из профиля NURPLAST. Даже в самые холодные и ветреные дни не было ни промерзания, ни продувания, и некоторые участники экспедиции даже шутили, говоря, что эти окна работают лучше, чем в их квартирах и домах на материке». Было решено повторить используемое решение при строительстве следующих секций.'
		}
	}, {
		img: '/assets/image//newsImg_2.webp',
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
		link: 'News',
		date: {
			imageItem: '/assets/image//newsImg_1.webp',
			titleItem: 'Окна ROLLER в экстримальных условиях',
			textItem: 'К двум большим юбилеям NURPLAST добавился еще один, «малый» юбилей, пятилетний. Ровно пять лет тому назад окна из профиля NURPLAST оказались там, где климатические условия сравнимы с марсианскими – в ПАМИРЕ. В 2014 году началось строительство памирской ГЭС. К жилым модулям станции предъявляются жёсткие требования: они должны выдерживать очень низкие температуры (порядка минус 60 градусов), противостоять ветру, скорость которого достигает здесь 80 метров в секунду, а также защищать людей от вредного ультрафиолетового излучения, воздействие которого в этих широтах особенно сильно. Важными критериями качества инженерных решений для полярников с самого начала были их энергоэффективность и безопасность. Потому что если вдруг выяснится, что «что-то идёт не так», то отправить на такой специфический объект сервисного техника или подвезти недостающую деталь нет совершенно никакой возможности. Специалисты NURPLAST разработали решение с учётом всех этих непростых требований для оконных блоков станции, которые были изготовлены из профилей системы UNOPEN с использованием стеклопакетов, заполненных криптоном.	«Наш первый сезон прошёл в штатном режиме, все элементы новой станции отработали без проблем, — вспоминает руководитель экспедиции. – В равной степени это касается и окон из профиля NURPLAST. Даже в самые холодные и ветреные дни не было ни промерзания, ни продувания, и некоторые участники экспедиции даже шутили, говоря, что эти окна работают лучше, чем в их квартирах и домах на материке». Было решено повторить используемое решение при строительстве следующих секций.'
		}
	}, {
		img: '/assets/image//newsImg_3.webp',
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
		link: 'News',
		date: {
			imageItem: '/assets/image//newsImg_1.webp',
			titleItem: 'Окна ROLLER в экстримальных условиях',
			textItem: 'К двум большим юбилеям NURPLAST добавился еще один, «малый» юбилей, пятилетний. Ровно пять лет тому назад окна из профиля NURPLAST оказались там, где климатические условия сравнимы с марсианскими – в ПАМИРЕ. В 2014 году началось строительство памирской ГЭС. К жилым модулям станции предъявляются жёсткие требования: они должны выдерживать очень низкие температуры (порядка минус 60 градусов), противостоять ветру, скорость которого достигает здесь 80 метров в секунду, а также защищать людей от вредного ультрафиолетового излучения, воздействие которого в этих широтах особенно сильно. Важными критериями качества инженерных решений для полярников с самого начала были их энергоэффективность и безопасность. Потому что если вдруг выяснится, что «что-то идёт не так», то отправить на такой специфический объект сервисного техника или подвезти недостающую деталь нет совершенно никакой возможности. Специалисты NURPLAST разработали решение с учётом всех этих непростых требований для оконных блоков станции, которые были изготовлены из профилей системы UNOPEN с использованием стеклопакетов, заполненных криптоном.	«Наш первый сезон прошёл в штатном режиме, все элементы новой станции отработали без проблем, — вспоминает руководитель экспедиции. – В равной степени это касается и окон из профиля NURPLAST. Даже в самые холодные и ветреные дни не было ни промерзания, ни продувания, и некоторые участники экспедиции даже шутили, говоря, что эти окна работают лучше, чем в их квартирах и домах на материке». Было решено повторить используемое решение при строительстве следующих секций.'
		}
	}
]

const News = () => {
	const imgVariants = {
		hidden: {
			opacity: 0,
			x: 20,
			scale: 0.5
		},
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				delay: (i + 1) * 0.1,
			}
		})
	}
	return (<section className={'padding_top_150 ' + st.news} >
		<div className={'_container ' + st.container} >
			<div className={st.news__header}>
				<h2 className={'text_h2 ' + st.news_header_title} >
					Последние новости
				</h2>
				<div className={st.news__bl_header_link} >
					<Link to='/news' className={st.news__header_link} >Все новости
					</Link>
				</div>
			</div>
			<ul className={st.news__items}>
				{newsDate.map((el, index) =>
					<motion.li
						initial="hidden"
						whileInView="animate"
						custom={index}
						viewport={{
							once: true
						}}
						variants={imgVariants}
					>
						<NewsItem newsItem={el} />
					</motion.li>
				)}
			</ul>
		</div>
	</section>)
}

export default News