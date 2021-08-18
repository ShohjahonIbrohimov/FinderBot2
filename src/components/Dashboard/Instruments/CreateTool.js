import React, { useState, useRef } from 'react'
import FileInput from '../../Reusable/FileInput'
import { useForm } from 'react-hook-form'
import InputText from '../../Reusable/InputText'
import TextArea from '../../Reusable/TextArea'
import Button from '../../Reusable/Button'
import { AdminImages } from '../../../constants/icons'

function CreateTool() {
    const [file, setFile] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)

    }

    const inputFile = useRef()

    const handleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const onEdit = () => {
        inputFile.current.click();
    }

    const onDelete = () => {
        setFile('')
    }


    return (
        
      <div class="w3-container">
      <h1>Способ оплата</h1> 

      <div class="payment-method-input-wrap"> 
          <div> 
            <label for="fname">Карты:</label><br />
            <div class="payment-method-input-item">
              <input type="text" id="fname" name="fname"  /> 
              <button class="app-button">+</button>
            </div>
          </div>
          <div> 
            <label for="fname">Ю моней:</label><br />
            <div class="payment-method-input-item">
              <input type="text" id="fname" name="fname"  /> 
              <button class="app-button">+</button>
            </div>
          </div>
          <div> 
            <label for="fname">Web money:</label><br />
            <div class="payment-method-input-item">
              <input type="text" id="fname" name="fname"  /> 
              <button class="app-button">+</button>
            </div>
          </div>
          <div> 
            <label for="fname">QIWI:</label><br />
            <div class="payment-method-input-item">
              <input type="text" id="fname" name="fname"  /> 
              <button class="app-button">+</button>
            </div>
          </div>
      </div>
     
    </div>
    )
}

export default CreateTool
