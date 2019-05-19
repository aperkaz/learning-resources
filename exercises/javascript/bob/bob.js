/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const hasText = message =>
  message.split("").filter(l => l.match(/[a-z]/i)).length > 0;

const isQuestion = message => message.endsWith("?");
const isYell = message => hasText(message) && message === message.toUpperCase();
const isYellQuestion = message => isYell(message) && isQuestion(message);
const isSilence = message => !message;

export const hey = rawMessage => {
  const message = rawMessage.trim();

  if (isYellQuestion(message)) {
    return `Calm down, I know what I'm doing!`;
  }

  if (isQuestion(message)) {
    return "Sure.";
  }
  if (isYell(message)) {
    return "Whoa, chill out!";
  }
  if (isSilence(message)) {
    return "Fine. Be that way!";
  }

  return "Whatever.";

  // question -> 'Sure.'
  // yell -> 'Whoa, chill out!'
  // yell question -> 'Calm down, I know what I'm doing!'
  // address, but not sayng a thing -> 'Fine. Be that way!'
  // else -> 'Whatever.'
};
