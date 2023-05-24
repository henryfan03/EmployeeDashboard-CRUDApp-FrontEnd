import {CButton, CForm, CFormInput, CFormLabel, CFormCheck, CFormSelect} from "@coreui/react";


const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '40px', color: '#11153e'}}>
            New Task
          </h2>
        </div>
        <CForm style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <CFormLabel htmlFor="exampleFormControlInput1">Description</CFormLabel>
          <CFormInput type="text" name="description" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>
          <CFormLabel htmlFor="exampleFormControlInput1">Priority</CFormLabel>
          <CFormInput type="text" name="priority" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>
          <CFormLabel htmlFor="exampleFormControlInput1">Is Complete &nbsp;</CFormLabel>
          <input type="checkbox" name="isComplete" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <CButton variant="outline" type="submit">
            Submit
          </CButton>
        </CForm>
        {/*<form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>*/}
        {/*  <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>*/}
        {/*  <input type="text" name="description" onChange ={(e) => handleChange(e)} />*/}
        {/*  <br/>*/}
        {/*  <br/>*/}

        {/*  <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority: </label>*/}
        {/*  <input type="text" name="priority" onChange={(e) => handleChange(e)} />*/}
        {/*  <br/>*/}
        {/*  <br/>*/}

        {/*  <label style={{color:'#11153e', fontWeight: 'bold'}}>isComplete: </label>*/}
        {/*  <input type="checkbox" name="isComplete" onChange={(e) => handleChange(e)} />*/}
        {/*  <br/>*/}
        {/*  <br/>*/}

        {/*  <button type="submit">*/}
        {/*    Submit*/}
        {/*  </button>*/}
        {/*  <br/>*/}
        {/*  <br/>*/}
        {/*</form>*/}
        {error!=="" && <p>{error}</p>}
        </div>
      </div>
    
  )
}

export default NewTaskView;