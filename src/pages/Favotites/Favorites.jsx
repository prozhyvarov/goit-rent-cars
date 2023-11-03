import { useDispatch, useSelector } from 'react-redux';
import { Container, NavLink, Img, Text } from './Favorites.styled';
import background from 'images/favorites_bgrd.png';

const Favorites = () => {
  const dispatch = useDispatch();
  // const favoriteCars = useSelector(selectFavoritesCars);
  // console.log(favoriteCars);
  return (
      <Container>
        <Text>Here will be your favorite cars. You can add them from our catalog.</Text>
        <Img src={background} alt="oops" />
        <NavLink to="/catalog">Go to Catalog</NavLink>
      </Container>
  );
};

export default Favorites;