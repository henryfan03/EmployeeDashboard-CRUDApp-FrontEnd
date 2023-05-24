import {CButton, CForm, CFormInput, CFormLabel, CFormText} from "@coreui/react";


const NewEmployeeView = (props) => {
    const {handleChange, handleSubmit, error } = props;

    return (
        <div className="root">
            <div className="formContainer">
                <div className="formTitle">
                    <h1 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '40px', color: '#11153e'}}>
                        New Employee
                    </h1>
                </div>
                <CForm style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                    <CFormLabel htmlFor="exampleFormControlInput1">First Name</CFormLabel>
                    <CFormInput type="text" name="firstname" onChange ={(e) => handleChange(e)} />
                    <br/>
                    <br/>
                    <CFormLabel htmlFor="exampleFormControlInput1">Last Name</CFormLabel>
                    <CFormInput type="text" name="lastname" onChange={(e) => handleChange(e)} />
                    <br/>
                    <br/>
                    <CFormLabel htmlFor="exampleFormControlInput1">Department</CFormLabel>
                    <CFormInput type="text" name="department" onChange={(e) => handleChange(e)} />
                    <br/>
                    <br/>

                    <CButton variant="outline" type="submit">
                        Submit
                    </CButton>
                </CForm>
                {/*<form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>*/}
                {/*    <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>*/}
                {/*    <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>*/}
                {/*    <input type="text" name="lastname" onChange={(e) => handleChange(e)} />*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>*/}
                {/*    <input type="text" name="department" onChange={(e) => handleChange(e)} />*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <button type="submit">*/}
                {/*        Submit*/}
                {/*    </button>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*</form>*/}
                {error!=="" && <p>{error}</p>}
            </div>
        </div>

    )
}

export default NewEmployeeView;