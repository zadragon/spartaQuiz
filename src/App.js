import React, { useState } from "react";

import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import Message from "./components/Message";
import Ranking from "./components/Ranking";

// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

// state에 필요한 데이터를 넣어줘요!
// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateToProps = (state) => ({
  ...state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {},
});

const App = () => {
  // const initialState = {
  //     name: "스파르타 코딩 클럽",
  //     page: "quiz",
  //     scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
  //     list: [
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //         { question: "르탄이는 2살이다.", answer: "O" },
  //     ],
  //     ranking: [
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //         { rank: 1, name: "임민영", message: "안녕 르탄아!" },
  //     ],
  // };

  // const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/message" element={<Message />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
