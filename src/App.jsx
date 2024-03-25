import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './assets/theme/theme';
import { AppBa } from './components/AppBa';
import { Wind } from './components/Wind';
import { Label } from './components/Label';
import { Card } from './components/Card';
import { Tree } from './components/Tree';
import { InpuText } from './components/InpuText';
import { Footer } from './components/Footer';
import servizi from './data/servizi.json';
import esperienza from './data/esperienza.json';
import progetti from './data/progetti.json';
import postBlog from './data/blog.json';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <nav>
        <AppBa className="z-50" />
      </nav>
      <main>
        <section id='hero'>
          <div className='min-h-custom-min flex flex-col items-center'>
            <h1 className='py-16 text-5xl text-white mt-4 ml-2'>Francesco Pio Nocerino<span className=' text-sm'><p>@loSpaccaBit</p></span></h1>
            <Label title="" text="Software Developer" emoji="🧑🏼‍💻" />
            <div className='p-4'>
              <Wind title={'loSpaccaBit.exe'} items={['File', 'Save']} text={"Esplora il mio mondo di bit e byte! 🌌. Sono lo sviluppatore che trasforma concetti in realtà digitali, creando siti web e app mobili che solcano l'infinito della creatività. 🚀 Con passione e innovazione, ogni progetto diventa un'avventura senza confini! 🛸"} footer={'Happy Coding :)'} />
            </div>
          </div>
        </section>
      </main>
      <section className='p-8'>
        <h2 className='text-3xl '>I miei Servizi</h2>
        <div className='flex flex-col mb-8'>
          {servizi.map((s, index) => (
            <Card key={index} title={s.title} text={s.description} />
          ))}
        </div>
      </section>
      <section className='flex flex-col items-center justify-center p-8'>
        <h2 className='text-3xl'>Esperienza</h2>
        <Tree data={esperienza} />
      </section>
      <section className='p-8'>
        <h2 className='text-3xl'>Progetti</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {progetti.map((p, index) => (
            <Card key={index} title={p.title} text={p.text} link={p.link} linkImg={p.linkImg} target={p.target} />
          ))}
        </div>
      </section>
      <section className='flex flex-col items-center justify-center p-8'>
        <h2 className='text-2xl mb-4'>Hai un'idea che vuoi realizzare?</h2>
        <h2 className='text-3xl text-green-500 '>Parliamone</h2>
        <InpuText />
      </section>
      <section className='p-8'>
        <h2 className='text-3xl'>Blog</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {postBlog.map((p, index) => (
            <Card key={index} title={p.title} text={p.text} link={p.link} linkImg={p.linkImg} target={p.target} />
          ))}
        </div>
      </section>
      <footer className='flex w-full justify-center items-center'>
        <Footer />
      </footer>
    </ThemeProvider>
  </>
);

export default App;
