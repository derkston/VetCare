import Container from '../../../../ui/container/container'
import style from './team.module.css'

export const Team = () => {
	return <section className={style.team}>
		<Container>
			<div className={style.team__content}>
				<div className={style.team__content_title}>
						<h3>Our Team</h3>
						<h2>Meet Our Groomers</h2>
				</div>
				<ul className={style.team__list}>
						<li
						 className={style.team__list_item}
						 >
							<img src="/public/img/home/team/happy-bearded-young-man-looks-with-joyful-expression-has-friendly-smile-wears-yellow-sweater-red-hat.png" alt="Rosalina Wiliam" className="team__item_img" />
							<h4>Rosalina Wiliam</h4>
							<h3>CEO & Founder</h3>
						</li>
						<li
						 className={style.team__list_item}
						 >
							<img src="/public/img/home/team/Fashion-girl-4.png" alt="Rosalina Wiliam" className="team__item_img" />
							<h4>Rosalina Wiliam</h4>
							<h3>CEO & Founder</h3>
						</li>
						<li
						 className={style.team__list_item}
						 >
							<img src="/public/img/home/team/photo-attractive.png" alt="Rosalina Wiliam" className="team__item_img" />
							<h4>Rosalina Wiliam</h4>
							<h3>CEO & Founder</h3>
						</li>
						<li
						 className={style.team__list_item}
						 >
							<img src="/public/img/home/team/attractive-laughing-guy-having-fun-smiling-happy.png" alt="Rosalina Wiliam" className="team__item_img" />
							<h4>Rosalina Wiliam</h4>
							<h3>CEO & Founder</h3>
						</li>
				</ul>
			</div>
		</Container>
	</section>
}