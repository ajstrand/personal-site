import Fallback from "./Fallback"
import Quote from "./Quote"

const ServerIslandExample = () => {
    return (
        <section>
		<h1>Astro Server Islands</h1>
		<Quote server:defer>
			<Fallback slot="fallback"/>
		</Quote>
		<Panel/>
	</section>
    )
}

export default ServerIslandExample;