import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Meme from "./Meme1";
import Meme2 from "./Meme2";
import Nine from "./Nine";
import Type from "./Type";
import Ten from "./Ten";
import Responsive from "./Responsive";
import Eleven from "./Eleven";
import Eighteen from "./Eighteen";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";
import Fourteen from "./Fourteen";
import Fifteen from "./Fifteen";
import Sixteen from "./Sixteen";
import Seventeen from "./Seventeen";

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
    case 'type':
      return <Type />;
    case 'five':
      return <Five />;
    case 'meme':
      return <Meme />;
    case 'meme2':
      return <Meme2 />;
    case 'six':
      return <Six />;
    case 'seven':
      return <Seven />;
    case 'eight':
      return <Eight />;
    case 'nine':
      return <Nine />;
    case 'ten':
      return <Ten />;
    case 'eleven':
      return <Eleven />;
    case 'twelve':
      return <Twelve />;
    case 'thirteen':
      return <Thirteen />;
    case 'fourteen':
      return <Fourteen />;
    case 'fifteen':
      return <Fifteen />;
    case 'eighteen':
      return <Eighteen />;
    case 'sixteen':
      return <Sixteen />;
    case 'seventeen':
      return <Seventeen />;
    case 'responsive':
      return <Responsive />;
    default:
      return <div>Unknown slide type</div>;
  }
};
