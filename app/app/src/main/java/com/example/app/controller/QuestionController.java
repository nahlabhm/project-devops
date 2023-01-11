package com.example.app.controller;


import com.example.app.model.test.Question;
import com.example.app.model.test.Quiz;
import com.example.app.service.QuestionService;
import com.example.app.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    //add question
    @PostMapping("/")
    public ResponseEntity<Question> add(@RequestBody Question question)
    {
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    //update
    @PutMapping("/")
    public ResponseEntity<Question> update(@RequestBody Question question)
    {
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

    //get all question
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionQuiz(@PathVariable("qid") Long qid){
       // Quiz quiz=new Quiz();
       // quiz.setId(id);
       // Set<Question> questionQuiz=this.questionService.getQuestionsQuiz(quiz);
        //return ResponseEntity.ok(questionQuiz);

        Quiz quiz=this.quizService.getQuiz(qid);
        Set<Question> questions=quiz.getQuestions();
        List list=new ArrayList(questions);
        if (list.size()>Integer.parseInt(quiz.getNumberQuestions()))
        {
            list=list.subList(0, Integer.parseInt(quiz.getNumberQuestions()+1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    //get single ques
    @GetMapping("/{quesId}")
    public Question get(@PathVariable("quesId") Long quesId){
        return this.questionService.getQuestion(quesId);
    }

    //delete
    @DeleteMapping("/{quesId}")
    public void delete(@PathVariable("quesId") Long quesId)
    {
        this.questionService.deleteQuestion(quesId);
    }

}
