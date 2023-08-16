import clsx from 'clsx'
import Button from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Text } from '../ui/Text'
import { TitleSection } from '../ui/TitleSection'
import st from './product_info.module.scss'
import { Link } from 'react-router-dom'

interface Props {
	props: dateProps
	imgSideLeft?: boolean
}
interface dateProps {
	image?: string
	title: string
	text: string
	buttonChildren?: string
	link: string
}
const ProductInfo = ({ props, imgSideLeft }: Props) => {
	return (<>
		<section className={st.info} >
			<div className={'_container ' + st.container}>
				<div className={clsx(
					st.info__wrapper,
					imgSideLeft ? st.info__image_left : '',
				)}>
					<div className={clsx(
						st.info__image,
					)} >
						<div className={st.info__bl_img}>
							<img width={274} height={268} src={props.image} />
						</div>
					</div>
					<div className={st.info__bl_text}>
						<div className={st.info__text}>
							<div className={st.info__title}>
								<TitleSection children={props.title} />
								<Text children={props.text} />
							</div>
							<div className={st.block__button}>
								<Link to={props.link}>
									<Button link={props.link} children={props.buttonChildren} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>)
}
export default ProductInfo