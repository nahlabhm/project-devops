package com.example.app.service.implementation;

import com.example.app.model.test.Question;
import com.example.app.model.test.Quiz;
import com.example.app.repository.QuestionRepository;
import com.example.app.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionServiceImp implements QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public Set<Question> getQuestionsQuiz(Quiz quiz) {
     return this.questionRepository.findByQuiz(quiz);
     }

    @Override
    public void deleteQuestion(Long quesId) {
        Question question=new Question();
        question.setQuestId(quesId);
        this.questionRepository.delete(question);
    }
}
