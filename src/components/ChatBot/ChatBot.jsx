import React, { useState } from 'react';
import { TbBrandWechat } from "react-icons/tb";


const questionsAndAnswers = [
    {
      question: 'What services do you offer?',
      answer: 'Salesforce Impplementation, Graphic Designing, Web Development, Resourcing/Staff Augmentation, Digital Marketing',
    },
    {
      question: 'What are your office hours?',
      answer: 'Our office hours are Monday to Saturday, 9am to 5pm.',
    },
    {
      question: 'How can I contact you?',
      answer: 'You can contact us via email at info@cloversal.com or phone at +91 - 77628 68012 (India) and +971 - 505852966 (UAE).',
    },
    // Add more questions and answers here
  ];
  
  const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
  
    const toggleChatBox = () => {
      setIsOpen(!isOpen);
    };
  
    const handleQuestionClick = (index) => {
      setSelectedQuestion(index === selectedQuestion ? null : index);
    };
  
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChatBox}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <TbBrandWechat className="w-6 h-6" />
        </button>
        {isOpen && (
          <div className="mt-4 w-80 p-4 bg-white rounded-lg shadow-lg border border-gray-300 transition transform duration-300 ease-in-out">
            <div className="text-lg font-bold dark:text-black mb-4">Frequently Asked Questions</div>
            <div className="space-y-4">
              {questionsAndAnswers.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    onClick={() => handleQuestionClick(index)}
                    className="self-end px-4 py-2 text-left font-medium text-white bg-blue-500 rounded-full transition transform duration-300 ease-in-out"
                  >
                    {item.question}
                  </button>
                  {selectedQuestion === index && (
                    <div className="mt-2 self-start p-2 bg-gray-200 dark:bg-gray-9 rounded-lg transition transform duration-300 ease-in-out">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ChatBox;