package com.example.app.service;

import com.example.app.model.test.Question;
import com.example.app.model.test.Quiz;

import java.util.Set;

public interface QuestionService {
    public Question addQuestion(Question question);

    public Question updateQuestion(Question question);

    public Set<Question> getQuestions();
    public Question getQuestion(Long questionId);

    public Set<Question> getQuestionsQuiz(Quiz quiz);

    public void deleteQuestion(Long quesId);
}
