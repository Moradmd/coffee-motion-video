import { Composition } from "remotion";
import { CoffeePromo } from "./CoffeePromo";

export const Root = () => {
  return (
    <Composition
      id="CoffeePromo"
      component={CoffeePromo}
      durationInFrames={450}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
