import { Suggestion } from '@screens/About.interface';

export interface Route {
  params: Suggestion | undefined;
}

export interface HomeScreenProps {
  route: Route;
}
