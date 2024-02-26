import React from 'react'
import ContactMainHead from '../components/ContactComponents/ContctMainHead'
import { ContactLifecyclesec } from '../components/ContactComponents/ContactLifecyclesec'
import { ContactForm } from '../components/ContactComponents/ContactForm'

export const Contact = () => {
  return (
    <>
    <ContactMainHead />
    <ContactLifecyclesec />
    <ContactForm />
    </>
  )
}
