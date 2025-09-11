import { useState, useCallback } from 'react';
import { sentences } from '../data/sentences';

const useRandomSentence = () => {
  const [usedSentences, setUsedSentences] = useState(new Set());

  const getRandomSentence = useCallback((category = 'all', customSentences = []) => {
    let availableSentences = [...sentences, ...customSentences];
    
    if (category !== 'all') {
      availableSentences = availableSentences.filter(sentence => sentence.category === category);
    }
    
    // 사용하지 않은 문장들 필터링
    const unusedSentences = availableSentences.filter(
      sentence => !usedSentences.has(sentence.id)
    );
    
    // 모든 문장을 사용했다면 초기화
    if (unusedSentences.length === 0) {
      setUsedSentences(new Set());
      return availableSentences[Math.floor(Math.random() * availableSentences.length)];
    }
    
    // 랜덤하게 문장 선택
    const randomSentence = unusedSentences[Math.floor(Math.random() * unusedSentences.length)];
    
    // 사용된 문장으로 마킹
    setUsedSentences(prev => new Set([...prev, randomSentence.id]));
    
    return randomSentence;
  }, [usedSentences]);

  const resetUsedSentences = useCallback(() => {
    setUsedSentences(new Set());
  }, []);

  return { getRandomSentence, resetUsedSentences };
};

export default useRandomSentence;