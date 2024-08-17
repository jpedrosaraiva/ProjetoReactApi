import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, DeleteButton, Link } from "./styles"
import { goToHomePage } from "../../Router/coordinator"

function HeaderDetails (props) {

    const navigate = useNavigate()

    return(
        <Container>
            <button onClick={() => goToHomePage(navigate) && props.setActiveScreen("HomePage")}>{"Todos os Pokémons"}</button>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>
        </Container>
    )
}

export default HeaderDetails