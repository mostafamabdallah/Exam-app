import React from "react";
import { useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

// Function to create random array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
// Data 
let questions = [
  {
    question:
      "The Nile River flows through two important regions in Egypt called",
    answers:[
      {
        value:"Upper Egypt and Lower Egypt",
        isTrue:true
      },
      {
        value:"Eastern Egypt and Western Egypt",
        isTrue:false
      },
      {
        value:"Mesopotamia",
        isTrue:false
      },
      {
        value:"Nubia and Cairo",
        isTrue:false
      }
    ],
  },
  {
    question:
      "The Nile River Valley was well suited for settlement. Which of the following statements supports this fact",
    answers: [
      {
        value:"The geography supported various desert plants and birds",
        isTrue:false
      },
      {
        value:"The geography included many areas for hunters to hunt widely",
        isTrue:false
      },
      {
        value:"The geography included areas for farming",
        isTrue:true
      },
      {
        value:"The geography helped to unify the country",
        isTrue:false
      }
    ],
  },
  {
    question:
      "Which of the following best describes how Egyptian civilization developed",
    answers: [
      {
        value:"Villages replaced towns",
        isTrue:false
      },
      {
        value:"Farms grew into villages and then cities",
        isTrue:true
      },
      {
        value:"Cities broke off into scattered farms",
        isTrue:false
      },
      {
        value:"Farms replaced cities andthen pyramids",
        isTrue:false
      }

    ],
  },
  {
    question:
      "Besides providing a stable food diet, what other advantage did Egypt’s location provide for early Egyptians",
    answers: [
      {
        value:"It had temples in which to worship",
        isTrue:false
      },
      {
        value:"It had Sumerian artwork to use as decoration",
        isTrue:false
      },
      {
        value:"It had natural barriers to protect against invaders",
        isTrue:true
      },
      {
        value:"It had two dynasties to celebrate religious traditions",
        isTrue:false
      }
    ],
  },
  {
    question: "Pyramids are",
    answers: [
      {
        value:"warehouses where surplus food is stored",
        isTrue:false
      },
      {
        value:"temples where the people are allowed to come and pray",
        isTrue:false
      },
      {
        value:"stone tombs with four rectangle-shaped sides that join a limestone roof",
        isTrue:false
      },
      {
        value:"royal tombs with four triangle-shaped sides that meet in a point on top",
        isTrue:true
      }

    ],
  },
  {
    question: "Which of the following best defines dynasty",
    answers: [
      {
        value:"a collection of queens",
        isTrue:false
      },
      {
        value:"a collection of kingdoms",
        isTrue:false
      },
      {
        value:"series of rulers from different families",
        isTrue:false
      },
      {
        value:"series of rulers from the same family",
        isTrue:true
      }
    ],
  },
  {
    question:
      "Who would the people of Egypt blame if crops did not grow or if disease struck",
    answers: [
      {
        value:"the farmers whose small villages were unclean",
        isTrue:false
      },
      {
        value:"the mummies whose ka was disturbed",
        isTrue:false
      },
      {
        value:"the pharaoh who was both ruler and god",
        isTrue:true
      },
      {
        value:"the dynasty that was in power",
        isTrue:false
      }

    ],
    trueIndex: 2,
  },
];

let randomQuestions = shuffle(questions);

// rendered element
const Question = () => {
  const navigate = useNavigate();
  let [counetr, setCounetr] = useState(0);
  const [question, setQuestion] = useState(randomQuestions[counetr].question);
  let [score, setScore] = useState(0);
  const randomAnswers = shuffle(randomQuestions[counetr].answers)
  const answers = randomAnswers.map((ans, i) => {
    return (
      <div>
        <input
          style={{ display: "inline" }}
          className={`answer${i + 1}`}
          type="radio"
          value={`${i}`}
          name="answer"
        />
        <label style={{ padding: "10px" }} htmlFor={`answer${i + 1}`}>
          {`${i + 1}. ` + ans.value}
        </label>
      </div>
    );
  });
  return (
    <div className="row align-content-center" style={{ height: "100vh" }}>
      <div className="col-12">
        <h1>{question} ?</h1>
      </div>
      <div className="answers col-12">{answers}</div>
      <div className="col-12">
        <button
          className="btn btn-info mt-3"
          onClick={() => {
            if($("input[type='radio'][name='answer']:checked").length > 0){
              if (
                randomAnswers[$("input[type='radio'][name='answer']:checked").val()].isTrue
              ) {
                setScore((score += 1));
              }
              if (counetr < randomQuestions.length - 1) {
                setCounetr((counetr += 1));
                setQuestion(randomQuestions[counetr].question);
                $("input[type='radio'][name='answer']:checked").prop('checked',false)
              } else {
                setCounetr(randomQuestions.length);
                navigate(
                  `/result?score=${(
                    (score / randomQuestions.length) *
                    100
                  ).toFixed(0)}`
                );
              }
            }else{
              alert('Please select an answer')
            }

          }}
        >
          Next question
        </button>
      </div>
    </div>
  );
};

export default Question;
//
