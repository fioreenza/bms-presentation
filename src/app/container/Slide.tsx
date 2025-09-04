import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
import Eleven from "./Eleven";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";
import Fourteen from "./Fourteen";
import Fifteen from "./Fifteen";
import Sixteen from "./Sixteen";
import Seventeen from "./Seventeen";
import HTML from "./HTML";
import CSS from "./CSS";

type Slide = { type: string };

export const SlideRenderer = ({ slide }: { slide: Slide }) => {
  switch (slide.type) {
    case 'one':
      return <One />;
    case 'two':
      return <Two />;
    case 'three':
        return <Three />;
    case 'four':
        return <Four />;
    case 'five':
      return <Five />;
    case 'six':
      return <Six />;
    case 'seven':
      return <Seven />;
    case 'eight':
      return <Eight />;
    case 'html':
      return <HTML />;
    case 'nine':
      return <Nine />;
    case 'ten':
      return <Ten />;
    case 'eleven':
      return <Eleven />;
    case 'twelve':
      return <Twelve />;
    case 'css':
      return <CSS />;
    case 'thirteen':
      return <Thirteen />;
    case 'fourteen':
      return <Fourteen />;
    case 'fifteen':
      return <Fifteen />;
    case 'sixteen':
      return <Sixteen />;
    case 'seventeen':
      return <Seventeen />;
    default:
      return <div>Unknown slide type</div>;
  }
};
