import React from 'react';
import markdown from '../data/index.md';
import Article from '../components/content/Article';

const Home = () => <Article markdown={markdown} />;

export default Home;
