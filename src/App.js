import './App.css';
import Particles from './components/Particles';
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import Roboto from "./Roboto_Bold.json"
import { Mesh, MeshBasicMaterial } from 'three';
import * as THREE from 'three';
import { ExtrudeGeometry } from 'three';
import TypingEffect from './TypingEffect';
import TypingEffectOther from './TypingEffectOther';
import TypingEffectOthero from './TypingEffectOthero';

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 5;
      controls.maxDistance = 5;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 5.0;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function Text3d() {
  const font = new FontLoader().parse(Roboto);
  const shapes = font.generateShapes('Artificial Intelligence and the Future of Work', 0.3);

  const extrudeSettings = {
    steps: 2,
    depth: 0.08, // This is the thickness of the text
    bevelEnabled: false,
    bevelThickness: 0,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
  };

  const geometry = new ExtrudeGeometry(shapes, extrudeSettings);
  geometry.computeBoundingBox();

  const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  geometry.translate(xMid, 0, 0);

  const text = new Mesh(geometry, new MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
  return <primitive object={text} />;
}

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      const questionMark = document.createElement('span');
      questionMark.textContent = '?';
      questionMark.style.position = 'absolute';
      questionMark.style.left = `${Math.random() * window.innerWidth}px`;
      questionMark.style.top = `${Math.random() * window.innerHeight}px`;
      questionMark.className = 'question-mark';
      document.getElementById('question-content').appendChild(questionMark);
      setTimeout(() => {
        document.getElementById('question-content').removeChild(questionMark);
      }, 2000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const [phrases] = useState([
    { text: "Explain Code", url: "https://chat.openai.com/" },
    { text: "Generate games", url: "https://chat.openai.com/" },
    { text: "Recognize Speech", url: "https://cloud.google.com/speech-to-text/" },
    { text: "Translate Languages", url: "https://www.deepl.com/translator" },
    { text: "Generate Art", url: "https://www.midjourney.com/home?callbackUrl=%2Fexplore" },
    { text: "Detect Fraud", url: "https://blogs.nvidia.com/blog/ai-fraud-detection-rapids-triton-tensorrt-nemo/" },
    { text: "Predict Stock Market", url: "https://www.aistockfinder.com/" },
    { text: "Drive Autonomous Vehicles", url: "https://hai.stanford.edu/news/how-ai-making-autonomous-vehicles-safer" },
    { text: "Diagnose Diseases", url: "https://hms.harvard.edu/news/how-ai-can-help-diagnose-rare-diseases" },
    { text: "Recommend Products", url: "https://cloud.google.com/recommendations/" },
    { text: "Automate Tasks", url: "https://www.sitepoint.com/task-automation-and-debugging-with-ai-powered-tools/" },
    { text: "Analyze Sentiments", url: "https://www.ibm.com/topics/sentiment-analysis" },
    { text: "Compose Music", url: "https://openai.com/research/jukebox" },
    { text: "Play Chess", url: "https://www.chess.com/play/computer/Chess.Com" },
    { text: "Answer Questions", url: "https://chat.openai.com/" },
    { text: "Filter Spam", url: "https://arstechnica.com/gadgets/2023/12/gmails-ai-powered-spam-detection-is-its-biggest-security-upgrade-in-years/" },
    { text: "Recognize Faces", url: "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-face-recognition" },
    { text: "Predict Weather", url: "https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/" },
    { text: "Improve Energy Efficiency", url: "https://www.powermag.com/how-artificial-intelligence-is-improving-the-energy-efficiency-of-buildings/" },
    { text: "Personalize Learning", url: "https://chat.openai.com/" },
    { text: "Write Articles", url: "https://chat.openai.com/" },
    { text: "Explain Code", url: "https://chat.openai.com/" },
    { text: "Generate games", url: "https://chat.openai.com/" },
    { text: "Recognize Speech", url: "https://cloud.google.com/speech-to-text/" },
    { text: "Translate Languages", url: "https://www.deepl.com/translator" },
    { text: "Generate Art", url: "https://www.midjourney.com/home?callbackUrl=%2Fexplore" },
    { text: "Detect Fraud", url: "https://blogs.nvidia.com/blog/ai-fraud-detection-rapids-triton-tensorrt-nemo/" },
    { text: "Predict Stock Market", url: "https://www.aistockfinder.com/" },
    { text: "Drive Autonomous Vehicles", url: "https://hai.stanford.edu/news/how-ai-making-autonomous-vehicles-safer" },
    { text: "Diagnose Diseases", url: "https://hms.harvard.edu/news/how-ai-can-help-diagnose-rare-diseases" },
    { text: "Recommend Products", url: "https://cloud.google.com/recommendations/" },
    { text: "Automate Tasks", url: "https://www.sitepoint.com/task-automation-and-debugging-with-ai-powered-tools/" },
    { text: "Analyze Sentiments", url: "https://www.ibm.com/topics/sentiment-analysis" },
    { text: "Compose Music", url: "https://openai.com/research/jukebox" },
    { text: "Play Chess", url: "https://www.chess.com/play/computer/Chess.Com" },
    { text: "Answer Questions", url: "https://chat.openai.com/" },
    { text: "Filter Spam", url: "https://arstechnica.com/gadgets/2023/12/gmails-ai-powered-spam-detection-is-its-biggest-security-upgrade-in-years/" },
    { text: "Recognize Faces", url: "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-face-recognition" },
    { text: "Predict Weather", url: "https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/" },
    { text: "Improve Energy Efficiency", url: "https://www.powermag.com/how-artificial-intelligence-is-improving-the-energy-efficiency-of-buildings/" },
    { text: "Personalize Learning", url: "https://chat.openai.com/" },
    { text: "Write Articles", url: "https://chat.openai.com/" },
    { text: "Predict Customer Behavior", url: "https://hbr.org/2021/05/using-ai-to-track-how-customers-feel-in-real-time" },
    { text: "Chatbot Services", url: "https://www.pcmag.com/picks/the-best-ai-chatbots" },
    { text: "Content Creation", url: "https://clickup.com/blog/ai-content-creation-tools/" },
    { text: "Smart Home Automation", url: "https://www.zdnet.com/article/how-ai-in-smart-home-tech-can-automate-your-life/" },
    { text: "Cybersecurity", url: "https://www.ibm.com/ai-cybersecurity" },
    { text: "Job Recruitment", url: "https://ideal.com/ai-recruiting/" },
    { text: "Virtual Personal Assistants", url: "https://chat.openai.com/" },
    { text: "Agricultural Optimization", url: "https://www.forbes.com/sites/louiscolumbus/2021/02/17/10-ways-ai-has-the-potential-to-improve-agriculture-in-2021/?sh=a6adb167f3b1" },
    { text: "Space Exploration", url: "https://www.forbes.com/sites/louiscolumbus/2021/02/17/10-ways-ai-has-the-potential-to-improve-agriculture-in-2021/?sh=a6adb167f3b1" },
    { text: "Environmental Monitoring", url: "https://www.unep.org/news-and-stories/story/how-artificial-intelligence-helping-tackle-environmental-challenges" },
    { text: "Predict Customer Behavior", url: "https://hbr.org/2021/05/using-ai-to-track-how-customers-feel-in-real-time" },
    { text: "Chatbot Services", url: "https://www.pcmag.com/picks/the-best-ai-chatbots" },
    { text: "Content Creation", url: "https://clickup.com/blog/ai-content-creation-tools/" },
    { text: "Smart Home Automation", url: "https://www.zdnet.com/article/how-ai-in-smart-home-tech-can-automate-your-life/" },
    { text: "Cybersecurity", url: "https://www.ibm.com/ai-cybersecurity" },
    { text: "Job Recruitment", url: "https://ideal.com/ai-recruiting/" },
    { text: "Virtual Personal Assistants", url: "https://chat.openai.com/" },
    { text: "Agricultural Optimization", url: "https://www.forbes.com/sites/louiscolumbus/2021/02/17/10-ways-ai-has-the-potential-to-improve-agriculture-in-2021/?sh=a6adb167f3b1" },
    { text: "Space Exploration", url: "https://www.forbes.com/sites/louiscolumbus/2021/02/17/10-ways-ai-has-the-potential-to-improve-agriculture-in-2021/?sh=a6adb167f3b1" },
    { text: "Environmental Monitoring", url: "https://www.unep.org/news-and-stories/story/how-artificial-intelligence-helping-tackle-environmental-challenges" },
  ]);

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <ReactFullpage
        scrollingSpeed={1800}
        scrollOverflow={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="centered-content">
                  <Canvas style={{ width: '100vw', height: '100vh' }}>
                    <CameraController />
                    <ambientLight />
                    <Text3d />
                  </Canvas>
                </div>
              </div>
              <div className="section 2">
                <div id="question-content" className="question-content">
                  <h1>But first, what even is AI?</h1>
                </div>
              </div>
              <div className="section 3">
                <div className="centered-content">
                  <h1><TypingEffect text="Artificial Intelligence is defined as the ability of computer systems to perform tasks that normally require human intelligence. It has the potential to transform various sectors such as healthcare, education, manufacturing, and transportation. By developing Artificial Intelligence in a responsible way that ensures  transparency and fairness, AI will complement human capabilities and push society further ahead." /></h1>
                </div>
              </div>
              <div className="section 4">
                <div className="centered-content">
                  <h1>Here's what AI is capable of.</h1>
                  {phrases.map((phrase, index) => {
                    const top = Math.random() * 100;
                    const left = Math.random() * 100;
                    return (
                      <a key={index} className="phrase-box" style={{ top: `${top}%`, left: `${left}%` }} href={phrase.url} target="_blank" rel="noopener noreferrer">
                        {phrase.text}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="section 5">
                <div className="centered-content">
                  <h1>So how is AI changing the labour market? <br /><br /> and <span className="emphasis">WHY</span> are so many people <span className="emphasis">WORRIED</span>?</h1>
                </div>
              </div>
              <div className="section 6">
                <div className="centered-content">
                  <h1>
                    AI is surpassing human workers in complex, non-routine tasks, according to a study.
                    <span className="fade"> Buut even then...</span>
                    {showText && <span className="fade-in"> There is an increasing demand for such jobs, as shown by an OECD policy brief.</span>}
                  </h1>
                  {!showText && <button className="question-marky" onClick={() => setShowText(!showText)}>?</button>}
                </div>
              </div>
              <div className="section 7">
                <div className="centered-content">
                  <h1>Here's why you should <span className="green-flash">NOT</span> be <span className="green-flash">SCARED</span></h1>
                </div>
              </div>
              <div className="section 8">
                <div className="centered-contenty">
                  <h1><TypingEffectOther text="Computers and robots replaced many routine jobs but created more non-routine ones in the past. Artificial Intelligence will do the same in the future, especially for tasks that it can do better than humans." /></h1>
                  <h1><TypingEffectOther text="The argument that AI will harm the job market is false because it ignores the dynamic and adaptable nature of the labor market. AI will displace some workers but also create new jobs that require new skills. This is not a new phenomenon and will lead to more employment in the long run." /></h1>
                  <h1><TypingEffectOther text="New technologies and advancements do not eliminate human jobs, but rather lower prices and improve quality of goods and services, which increase demand and employment. This is supported by historical evidence and economic theory (Bessen 3)." /></h1>
                  <h1><TypingEffectOther text="Artificial Intelligence will create new jobs with a different set of skills in creativity, problem-solving, and emotional intelligence that are yet to be discovered as it might introduce new products and services that tap into undiscovered needs and wants of  society (Bessen 17)." /></h1>
                  <h1><TypingEffectOther text="Higher exposure to Artificial Intelligence does not reduce job demand, but rather increases it for workers who can use it effectively. Artificial Intelligence can enhance human skills, create new opportunities, and improve productivity in various sectors (OECD 3)." /></h1>
                </div>
              </div>
              <div className="section 9">
                <div className="centered-content">
                  <h1>And what can the <span className="blue-flash">government</span> do?</h1>
                </div>
              </div>
              <div className="section 10">
                <div className="centered-contenty">
                  <h1><TypingEffectOthero text="Artificial Intelligence will affect the labor market by creating and eliminating jobs in different sectors. Workers will need to train and transition to new jobs, which could be disruptive. Governments can protect workers from such effects by providing education, social safety nets, and collaboration policies (Bessen 17; TTC AI Study 45)." /></h1>
                  <h1><TypingEffectOthero text="Petropoulos (2021) argues that education and training should prepare workers for the future workforce that will use Artificial Intelligence and digital skills. This will help workers adapt to new jobs and reduce the fear of being displaced by automation. Policymakers and government can support this process by passing laws and funding programs that promote and provide these skills. Workers with traditional skills can also benefit from these programs or continue their old skills for a while, as some physical tasks are not yet automated by Artificial Intelligence (Felten et. al. 2; OECD 5; Webb 41)." /></h1>
                </div>
              </div>
              <div className="section 11">
                <div className="centered-contenty">
                  <h1>And that's why you shouldn't be <span className="green-red">WORRYING</span></h1>
                  <a href="https://docs.google.com/document/d/1HgQWJU0NjxfTqIkwbIS6gYIR4ly_ZF9WA6K-NIcpLjU/edit?usp=sharing" role="button" style={{
                    display: 'inline-block',
                    position: 'absolute',
                    bottom: '0',
                    left: '47%',
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    borderWidth: '1px',
                    borderRadius: '4px',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    textAlign: 'center'
                  }}>Sources</a>
                  <p style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0'
                  }}> by Aryan Tajne </p>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
