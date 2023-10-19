'use client'


import axios from 'axios';
import React from 'react';
import { useState } from 'react';


interface UrlObject {
  fullUrl: string;
  shortenedUrl: string;
}

export const useShorterUrl = () => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [shortenedUrls, setShortenedUrls] = useState<UrlObject[]>([]);
  
  const handleUrlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  };
  
  const shortenUrl = async () => {
    if (!inputUrl) {
      alert('Por favor, insira uma URL válida.');
      return;
    }
    
    try {
      axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputUrl)}`)
      .then(response => {
        const shortenedUrl = response.data;
        setShortenedUrls([...shortenedUrls, {fullUrl: inputUrl, shortenedUrl: shortenedUrl }]);
      })
      .catch(error => {
        console.error('Erro ao encurtar a URL:', error);
        alert('Essa URL é inválida!');
      });
      
      setInputUrl('');

    } catch (error) {
      console.error('Erro ao encurtar a URL:', error);
      alert('Ocorreu um erro ao encurtar a URL. Por favor, tente novamente.');
    }
  };

  return {
    handleUrlInputChange,
    inputUrl,
    shortenUrl,
    shortenedUrls
  }

}