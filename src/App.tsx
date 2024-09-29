import Dropdown from "./components/Dropdown"
// import { YouTubeProps } from "react-youtube"
// import Tooltip from "./components/Tooltip";

// import { InfoIcon } from "./components/icons";

function App() {

  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }

  // const opts: YouTubeProps['opts'] = {
  //   width: '1024',
  //   height: '276',
  // };

  return (
    <div className="flex flex-col h-screen pt-[50px]">
      <div className="flex flex-col items-center">
        <span className="flex flex-col text-3xl font-bold">How I Experience Psychology in My Life </span>
        <span className="flex flex-col text-lg"> This is a submisson for PSY101 Project 1</span>
      </div>

      <div className="flex flex-col my-[30px] mx-[300px] text-justify text-lg">
        <h1 className="text-2xl font-bold my-[10px]">My Activity</h1>
        <p className="mb-[20px]"> One of my hobbies is speedcubing, which is the act of solving a rubik's cube as fast as possible. I am really passionate about this because I find puzzles really fun, and as a competitive person, an active competitive scene drew me in. My personal best is currently a 7.49 second solve on the standard 3x3 cube. Competitions are usually hosted by the World Cube Assosiaction (WCA), which is the official leaderboard and the competitive community's official site. You can find more information about speedcubing and its specifics <a href="https://www.worldcubeassociation.org/regulations/#article-9-events">here</a>.</p>

        Some fun facts about speedcubing:
        <div className="mx-230px]">
          <Dropdown text="Different Events" desc=" Although 3x3 is the most famous event in speedcubing, there are a lot more interesting events, such as the bigger cubes 4x4, 5x5, all the way to 7x7, other puzzles, such as the pyraminx, skewb, or square-1, and fun categories like one-handed solving, solving with feet, blindfolded solving, and Fewest Move Count, figuring out least amount of moves you can do to solve a scrambled cube." />
          <Dropdown text="World Records" desc="The current official world record holder of the 3x3 is Max Park, with a time of 3.13 seconds, and the unofficial world record is an astonishing 2.78 seconds by Leo Borneo. There are also other notable cubers like Yiheng Wang, currently holding the world record average of 5 solves while being 9 years old!" isWorldRecords={true}/>
        </div>

        <div className="flex flex-col items-center my-[30px]">
          <img className="flex  w-[100%]" src="wca-results.png" />
          <span className='italic text-sm'>This is a photo of my results page taken from WCA's website! (<a href="https://www.worldcubeassociation.org/persons/2019INDR02">worldcubeassociation.org </a>, 2024).</span>
        </div>
        
        
        <h1 className="text-2xl font-bold my-[10px]">Cognitive Development</h1>
        <p className="mb-2"><b>Piaget's 4 Stages</b> of cognitive development are a theory that there are stages of how children develop schemas through aging. My parents gave me my first rubik's cube when I was around 8 years old. According to <b>Piaget's Stages</b>, I was in the <b>Concrete Operational Stage</b>. In this stage, children develop simple concrete thoughts about objects, and only start to understand conservation (Chapter 4 Slides, page 79). During this time, I was only able to solve one side at most, as I did not understand how the pieces moved around each other. Here I was able to apply conservation, where I understood that the number of pieces remained the same despite turning the cube, and classification, where I was able to group the same colored pieces on one side.</p>
        <p className="mb-5">As I grew up, I grew into the <b>Formal Operational Stage</b>. In this stage, abstract thinking and hypothetical reasoning emerge, allowing for me to learn how to solve for the first time. Abstract reasoning allowed me to understand how algorithms worked on a cube, allowing me to learn the beginners method easily. Hypothetical thinking enabled me to test different situations and learn what algorithms are better in situations. This helped me develop a <b>schema</b> of the cube. A <b>schema</b> is a thought structure based on experiences. In this case, the <b>schema</b> I had about the cube started as a rubik's cube means that it is a colored cube that twists and turns. As I grew up, this <b>schema</b> got updated to a rubik's cube being a puzzle a part of a group of puzzles called twisty puzzles. Assimilation is also used when I attempt to solve rubil's cubes of bigger sizes, as my knowledge of algorithms I learned for the 3x3 can be applied to solving larger sized rubik's cubes.</p>

        <h1 className="text-2xl font-bold my-[10px]">The Nervous System</h1>
        <p className="mb-2">In chapter 2, we learned about the nervous system and its derivatives that help us function. The <b>somatic nervous system</b> is the part of our nervous system that controls our voluntary actions, sending signals to the spinal cord and brain and back to our joints, muscles and skin (Textbook, pg 49). This nervous system helps me translate the sensory information, such as the state of the cube, into motor information, such as what turns I need to do to continue. This also links to the part of the chapter where we talk about the brain, where the <b>somatic nervous system</b> sends signals to the <b>substantia nigra</b> which is the part of the brain that is able to tranlsate sensory information to motor information, controlling the start of my turns and the smoothness of how my fingers move.</p>
        <p className="mb-5">Speedcubing is also a high pressure environment as many people ususally come to watch, and you are seated beside other competitiors, which can make me nervous. The reflexes of the <b>autonomic nervous system</b> help me perform better. The <b>sympathetic nervous system</b>, controlling our urge for fight or flight, is an important one as it helps increase my reflexes and process information faster. In contrast, the <b>parasympathetic nervous system</b> helps bring my body to a more relaxed state, keeping me in check in between solves.</p>

        <h1 className="text-2xl font-bold my-[10px]">Consciousness</h1>
        <p><b>Consciousness</b> is the awareness of my surroudnings, thoughts, feelings and perceptions (Chapter 3 Slides, pg 11). When I am solving, I am in an altered state of <b>consciousness</b>, as I zone in on my solving. I tune out noises from my surroundings in order to enter flow. In solves, both <b>automatic processing</b> and <b>controlled processing</b> are used. <b>Automatic processing</b> is when I don't need much attention in order to do a certain task, while <b>controlled processing</b> is the opposite (Chapter 3 Slides, pg 28). Over the years, I have developed muscle memory for algorithms that I memorize in order to solve the cube, making it so that I don't have to put much attention and allows me to focus my consciousness to other aspects of the solve. </p>
        <div className="flex flex-col items-center my-[30px]">
          <img className="flex  w-[50%]" src="jperm.png" />
          <span className='italic text-sm'>This is an example of an algorithm I would use in the last stage of the solve (<a href="jperm.net">jperm.net </a>, 2024).</span>
        </div>
        <p className="mb-5"><b>Controlled processing</b> is used in tandem with automatic. As I do the algorithm, I try and look and process how the other pieces of the cube are moving, and where they will end up when I finish doing the algorithm, in order to reduce pauses. This requires a lot of my attention which can cause intentional blindness, causing me to not be as aware of my surroundings.</p>
        
        <h1 className="text-2xl font-bold my-[10px]">IMPACT</h1>
        <p><b>IMPACT</b> is a set of six strategies to help practice skills (Chapter 1 Slides, page 31). It consists of improving, monitoring, practicing, attending, connecting and thinking deeply. Here is how I used these strategies throughout my journey as a speedcuber:</p>
        <div className="flex items-center justify-center px-10 mt-10">
          <table className="table-fixed border border-collapse">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2 text-center" colSpan={1}>IMPACT Strategy</th>
                <th className="border border-black px-4 py-2 text-center" colSpan={1}>How I've used it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Improvment</td>
                <td className="border border-black px-4 py-2 text-center">I started my journey with a time of 1 minute and 57 seconds. I knew I could do better and pushed myself to where I am now.</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Monitoring</td>
                <td className="border border-black px-4 py-2 text-center">Joining competitions or solving against friends is my way of checking progress, as I can see how much faster I am, whilist learning from other people.</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Practicing</td>
                <td className="border border-black px-4 py-2 text-center">I do daily practice sessions back when I was actively competing, now I limit it to twice a week.</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Attending</td>
                <td className="border border-black px-4 py-2 text-center">When learning an algorithm set for one of the stages of the rubik's cube, I used a <a href="https://jperm.net/algs/pll">trainer</a> (Click on the training tab), that gave me specific cases in random orders so I could learn multiple algorithms at once. It also made use of spaced repetition, in order to increase my retention of these algorithms.</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Connecting</td>
                <td className="border border-black px-4 py-2 text-center">I was able to learn how to solve other twisty puzzles with my knowledge of the rubik's cube. One example is how I learned to solve a <a href="https://en.wikipedia.org/wiki/Megaminx">megaminx</a> without tutorials, and with only knowledge of the 3x3 cube.</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2 text-center">Thinking Deeply</td>
                <td className="border border-black px-4 py-2 text-center">Doing slow solves in order to practice looking ahead.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col my-[30px] mx-[300px] py-[100px] text-lg">
        <div className="flex border-t border-black"></div>
        <div className="flex justify-center text-xl">
          <span>The source code for this article and additional credits <a href="https://github.com/hindra2/psy101-project1">are available on GitHub</a>.</span>
        </div>
      </div>
    </div>
  )
}

export default App
