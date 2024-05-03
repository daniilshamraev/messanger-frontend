import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { motion } from "framer-motion"
import './App.css'
import Chat from './components/Chat/Chat';
import { Link } from 'react-router-dom';


function App() {

  const wallet = useTonWallet();

  const chats = [
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    {
      address: 'UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd',
      master_contacrt_address: 'EQdece0i3rjc...3cd3exdom',
      messages: [
        {
          address: 'EQdece0i3rjc...3cd3exdom',
          text: 'Hi, how are you?',
          content: undefined,
          time: '10:00',
          read: false
        }
      ]
    },
    
  ];

  return (
    <>
      {wallet &&
        <Link to="/settings">
        <motion.button
          initial={{ x: 300 }} animate={{ x: 0 }}
          style={{ position: 'absolute', top: 20, right: 20 }}
        >
          Настройки
        </motion.button>
      </Link>
      }
      <motion.div initial={{ x: -300 }}
      animate={{ x: 0 }}><h1><code>dApp</code> Messanger</h1></motion.div>
      <motion.div initial={{ x: 300 }}
      animate={{ x: 0 }} className="ton_data">
        <TonConnectButton/>
        <span className=''>TestNet</span>
      </motion.div>
      {wallet && <Chat chats={chats} />}
    </>
  )
}

export default App
