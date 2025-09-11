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
import ForkRepo from "./ForkRepo";
import Type from "./Type";
import Ten from "./Ten";
import Eleven from "./Eleven";
import Eighteen from "./Eighteen";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";
import Fourteen from "./Fourteen";
import Fifteen from "./Fifteen";
import Sixteen from "./Sixteen";
import Seventeen from "./Seventeen";
import Porto from "./Porto";
import Button from "./Button";
import Tailwind1 from "./Tailwind1";
import LearnTailwind from "./LearnTailwind";
import WhyTailwind from "./WhyTailwind";
import Tailwind2 from "./Tailwind2";
import Tailwind3 from "./Tailwind3";
import Handson from "./HandsOn";

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
    case 'porto':
      return <Porto />;
    case 'button': 
      return <Button />;
    case 'tailwind1':
      return <Tailwind1 />;
    case 'tailwind2':
      return <Tailwind2 />;
    case 'whytailwind':
      return <WhyTailwind />;
    case 'tailwind3' :
      return <Tailwind3/>
    case 'learntailwind':
      return <LearnTailwind />;
    case 'handson':
      return <Handson />;
      case 'forkrepo':
      return <ForkRepo />;
    default:
      return <div>Unknown slide type</div>;
  }
};
