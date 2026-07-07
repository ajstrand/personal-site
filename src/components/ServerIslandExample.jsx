import Fallback from "./Fallback"
import Quote from "./Quote"

const ServerIslandExample = () => {
    return (
        <section>
		<h1>Astro Server Islands</h1>
		<Quote 
		  server={defer} fallback={<Fallback/>}>
		</Quote>
	</section>
    )
}

export default ServerIslandExample;