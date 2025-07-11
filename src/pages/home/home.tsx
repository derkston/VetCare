import style from './home.module.css'
import { PetCare } from './sections/petCare/petCare'
import { Preview } from './sections/preview/previews'
import { Prices } from './sections/prices/prices'
import { SuccessStory } from './sections/successStory/successStory'
import { Team } from './sections/team/team'
import { WhatWeDo } from './sections/whatWeDo/whatWeDo'

const Home = () => {
	return <main className={style.main}>
			<Preview/>
			<WhatWeDo/>
			<SuccessStory/>
			<Team/>
			<Prices/>
			<PetCare/>
	</main>
}

export default Home