export const goToHomePage = (navigate) => navigate("/");
export const goToPokedex = (navigate) => navigate("/pokedex");
export const toDetails = (navigate, pokemonName) =>navigate(`/details/${pokemonName}`)