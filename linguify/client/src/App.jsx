import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Learn from './pages/Learn'
import Characters from './pages/Characters'
import Vocabulary from './pages/Vocabulary'
import Grammar from './pages/Grammar'
import Sentences from './pages/Sentences'
import Listening from './pages/Listening'
import Speaking from './pages/Speaking'
import Conversations from './pages/Conversations'
import ConversationPlay from './pages/ConversationPlay'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import { useAuth } from './context/AuthContext'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="section-container py-20 text-center text-slate-300">Loading...</div>
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/learn" element={<ProtectedRoute><Learn /></ProtectedRoute>} />
        <Route path="/learn/characters" element={<ProtectedRoute><Characters /></ProtectedRoute>} />
        <Route path="/learn/vocabulary" element={<ProtectedRoute><Vocabulary /></ProtectedRoute>} />
        <Route path="/learn/grammar" element={<ProtectedRoute><Grammar /></ProtectedRoute>} />
        <Route path="/learn/sentences" element={<ProtectedRoute><Sentences /></ProtectedRoute>} />
        <Route path="/learn/listening" element={<ProtectedRoute><Listening /></ProtectedRoute>} />
        <Route path="/learn/speaking" element={<ProtectedRoute><Speaking /></ProtectedRoute>} />
        <Route path="/learn/conversations" element={<ProtectedRoute><Conversations /></ProtectedRoute>} />
        <Route path="/learn/conversations/:id" element={<ProtectedRoute><ConversationPlay /></ProtectedRoute>} />
        <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </AppLayout>
  )
}
