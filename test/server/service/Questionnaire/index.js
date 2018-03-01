const mongoose = require('mongoose');
const Questionnaire = mongoose.model('Questionnaire');

module.exports = {
    /*  {params} 
        qa      -> questionnaire object
        user    -> user mongoose model who creates the questionnaire
        return  -> questionnaire model which can be saved to the database
     */
    createQuestionnaire(qa, userId) {
        const questionnaire = new Questionnaire({
            madeBy: userId,
            title: 'teszt',
            description: 'asddfasdfsadfsadfsadf',
            voteCount: 20,
            questions: [
                {
                    title: 'Mit adtak a Rómaiak?',
                    qType: 'radio',
                    answerOpts: ['Semmit', 'Heeeh', 'teszt', 'sdgsidgndsgingid']
                }
            ]
        });
        return questionnaire;
    },

    async findAllByUserId(userId) {
        let questionList;

        try {
            questionList = await Questionnaire.find({ madeBy: userId }).exec();
        } catch (err) {
            console.error(
                'Hiba a questionList lekérdezése során func: findAllByUserId',
                err
            );
        }

        return questionList;
    }
};
