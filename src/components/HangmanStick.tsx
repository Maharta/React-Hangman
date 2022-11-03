const HEAD = (
  <div
    key="head"
    className="rounded-full border-black border-[6px] w-12 h-12 absolute left-[104%] top-7"
  ></div>
);

const BODY = (
  <div
    key="body"
    className="w-[6px] h-20 bg-black left-[115%] top-[70px] absolute"
  ></div>
);

const RIGHT_ARM = (
  <div
    key="rightArm"
    className="w-16 h-[6px] bg-black rotate-[-30deg] top-[100px] origin-bottom-left absolute left-[118%]"
  ></div>
);

const LEFT_ARM = (
  <div
    key="leftArm"
    className="w-16 h-[6px] bg-black rotate-[30deg] top-[68px] left-[88%] origin-bottom-left absolute"
  ></div>
);

const RIGHT_LEG = (
  <div
    key="rightLeg"
    className="w-16 h-[6px] bg-black rotate-[60deg] top-[140px] left-[115%] origin-bottom-left absolute"
  ></div>
);

const LEFT_LEG = (
  <div
    key="leftLeg"
    className="w-16 h-[6px] bg-black rotate-[-60deg] top-[140px] left-[85%] origin-bottom-right absolute"
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangmanStickProps {
  incorrectGuess: number;
}

const HangmanStick = ({ incorrectGuess }: HangmanStickProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, incorrectGuess)}
      <div className="w-[6px] h-8 bg-black absolute left-[115%]"></div>
      <div className="h-[6px] bg-black w-32 left-[50%] absolute"></div>
      <div className="bg-black w-[6px] h-64 mx-auto"></div>
      <div className="h-[6px] bg-black w-48"></div>
    </div>
  );
};

export default HangmanStick;
