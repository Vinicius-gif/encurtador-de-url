'use client'

import {useState} from 'react'
import axios from 'axios'

const API_KEY = 'b2e173f7369d128004d88defe16314b123c62650'; // chave de API do Bitly

export const useEncurtarURL = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [isValidURL, setIsValidURL] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const validateURL = (url: string) => {
    try {
      if (url === '') {
        setIsValidURL(true);
        setIsEmpty(true);
        return;
      }

      new URL(url);
      setIsValidURL(true);
      setIsEmpty(false);
    } catch (error) {
      setIsValidURL(false);
      setIsEmpty(false);
    }
  };

  const shortenURL = async () => {
    validateURL(originalURL);

    if (!isValidURL) {
      return;
    }

    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: originalURL,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { link } = response.data;
      setShortenedURL(link);
    } catch (error) {
      console.error('Erro ao encurtar a URL:', error);
      alert('Ocorreu um erro ao encurtar a URL. Por favor, tente novamente mais tarde.');
    }
  };

  return {
    originalURL,
    setOriginalURL,
    shortenedURL,
    setShortenedURL,
    isValidURL,
    setIsValidURL,
    isEmpty,
    setIsEmpty,
    shortenURL
  }
}