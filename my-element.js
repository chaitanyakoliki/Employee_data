import { LitElement, html } from "lit";

class EmployeeForm extends LitElement {
  static get properties() {
    return {
      empForm: { type: Object },
    };
  }

  constructor() {
    super();
    this.empForm = {
      name: { value: "", isValidName: false, errorMessage: "" },
      empCode: { value: "", isValidName: false, errorMessage: "" },
      email: { value: "", isValidName: false, errorMessage: "" },
      phone: { value: "", isValidName: false, errorMessage: "" },
      address1: { value: "", isValidName: false, errorMessage: "" },
      address2: { value: "", isValidName: false, errorMessage: "" },
      city: { value: "", isValidName: false, errorMessage: "" },
      landmark: { value: "", isValidName: false, errorMessage: "" },
      country: { value: "", isValidName: false, errorMessage: "" },
      pin: { value: "", isValidName: false, errorMessage: "" },
      submit: { value: "", isValidName: false, errorMessage: "" },
      // myData :{},
    };
    // this.saveAddressTo
  }

  // async postData() {
  //   const url = '\src\store-data.json';
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.myData)
  //   });

  //   const result = await response.json();
  //   console.log(result); // log the response from the server
  // }

  render() {
    return html`
      <div class="title" style="background-color:#797373" >
      <h1 style=color:orange background-color:#797373 >Employee-Dataform </h1>
    </div>
      <div class="container"  style="background-color:#c5bdbd">
      
        <label  class="inp_lable">
          <b>Name:</b><input 
            type="text" 
            id="name-input"
            @input=${(e) => this.validateForm(e, "empName")}
            required
            maxlength="40"
            pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*"   
            style=${
              this.empForm.name?.errorMessage
                ? "border: solid 1px red"
                : "height:20px"
            }
          />
          <span>${this.empForm.name?.errorMessage || ""}</span></label
        ><br />
       
<!-- --------------------- -->
      
<label  class="inp_lable"><b>Code:</b></label>
          <td><input
            type="text"
            id="empcode-input"
            @input=${(e) => this.validateForm(e, "empCode")}
            required
            pattern="/^([A-Za-z]d{5})$/;"
            style=${
              this.empForm.empCode?.errorMessage
                ? "border: solid 1px red"
                : "height:20px"
            }/>
          <span>${this.empForm.empCode?.errorMessage || ""}</span></td>
        <tr>
          <br>
        
<!-- ------------------------------ -->
        
        <label  class="inp_lable"><b>Email:</b></label>
          <input type="email" id="email-input" required annalect.com
          pattern=/^[^s@]+@[^s@]+.[^s@]+$/;
          @input=${(e) => this.validateForm(e, "empEmail")}
          style=${
            this.empForm.empEmail?.errorMessage
              ? "border:solid 1px red"
              : "height:20px"
          }
          />
          <span>${this.empForm.email?.errorMessage || ""}</span></td>
        </tr>
          <br />
<!-- ------------------------------------ -->
          <label  class="inp_lable"><b>Designation:</b></label>
            <select
                name="Designation"
                @input=${(e) => this.validateForm(e, "Designation")}
                style=${
                  this.empForm.Designation?.errorMessage
                    ? "border:solid 1px red"
                    : "height:25px"
                }
              >
                <option value="">--Please select--</option>
                <option value="Trainee Engineer">Trainee Engineer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Programmer Analyst">Programmer Analyst</option>
                <option value="Senior Software Engineer">
                  Senior Software Engineer
                </option>
                <option value="System Analyst">System Analyst</option>
                <option value="Project Lead">Project Lead</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Program Manager">Program Manager</option>
              </select>
            <br />
<!-- ------------------- -->
          <label class="inp_lable"><b>Department:</b></label>
               <select
                name="Department"
                @input=${(e) => this.validateForm(e, "Designation")}
                style=${
                  this.empForm.Designation?.errorMessage
                    ? "border:solid 1px red"
                    : "height:25px "
                }
              >
                <option value="">--Please select--</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
              </select>
               <br />
               <!----------------------------->

            <label class="inp_lable">
              <b>Primary Phone:</b><input
                type="text"
                id="phone-input"
                @input=${(e) => this.validateForm(e, "phoneNumber")}
                style=${
                  this.empForm.phone?.errorMessage
                    ? "border:solid 1px red"
                    : "height:20px "
                }
              />
              <span>${this.empForm.phone?.errorMessage || ""}</span
              ><label>
                <br />
                <!-------------------------->

                <label class="inp_lable">
                  <b>Secondary Phone:</b><input
                    type="text"
                    id="phone-input"
                    @input=${(e) => this.validateForm(e, "phoneNumber")}
                    style=${
                      this.empForm.phone?.errorMessage
                        ? "border:solid 1px red"
                        : "height:20px "
                    }
                  />
                  <span>${this.empForm.phone?.errorMessage || ""}</span
                ><label>
                <br />
                <!------------------------------>

                <label class="inp_lable">
                  <b>AddressLine1:</b><input  placeholder="House no. , Floor , Street"
                    type="text"
                    id="address-input"
                    @input=${(e) => this.validateForm(e, " AddressLine1")}
                    style=${
                      this.empForm.address1?.errorMessage
                        ? "border:solid 1px red"
                        : "height:20px "
                    }
                  />
                  <span>${this.empForm.address1?.errorMessage || ""}</span
                ><label>
                <br />

                <label class="inp_lable">
                  <b>AddressLine2:</b><input placeholder="Area, Locality"
                    type="text"
                    id="address1-input"
                    @input=${(e) => this.validateForm(e, " AddressLine2")}
                    style=${
                      this.empForm.AddressLine2?.errorMessage
                        ? "border:solid 1px red"
                        : "height:20px "
                    }
                  />
                  <span>${this.empForm.AddressLine2?.errorMessage || ""}</span
                ><label>
                <br />
                <!--------------------------->

                <label class="inp_lable">
                  <b>Landmark:</b><input 
                    type="text"
                    id="lmark-input"
                    @input=${(e) => this.validateForm(e, " landmark")}
                    style=${
                      this.empForm.landmark?.errorMessage
                        ? "border:solid 1px red"
                        : "height:20px "
                    }
                  />
                  <span>${this.empForm.landmark?.errorMessage || ""}</span
                ><label>
                <br />
                <!------------------------------->

                <label class="inp_lable">
              <b>City:</b>
              <select
                name="city"
                @input=${(e) => this.validateForm(e, "City")}
                style=${
                  this.empForm.city?.errorMessage
                    ? "border:solid 1px red"
                    : "height:25px "
                }
              >
                <option value="">--Please select--</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="vijayawada">vijayawada</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                
              </select> </label
            ><br />
            <!----------------------------->

            <label class="inp_lable">
              <b>Country:</b>
              <select
                name="country"
                @input=${(e) => this.validateForm(e, "Country")}
                style=${
                  this.empForm.country?.errorMessage
                    ? "border:solid 1px red"
                    : "height:25px "
                }
              >
                <option value="">--Please select--</option>
                <option value="India">India</option>
                <option value="America">America</option>
               
              </select> </label
            ><br />

                <label class="inp_lable">
                 <b>Zip Code:</b><input 
                    type="text"
                    id="zip-input"
                    required
                    pattern="[0-9]{6}"
                  
                    

                    @input=${(e) => this.validateForm(e, " Zip")}
                    style=${
                      this.empForm.pin?.errorMessage
                        ? "border:solid 1px red"
                        : "height:20px "
                    }
                  />
                  <span>${this.empForm.pin?.errorMessage || ""}</span
                ><label>
                <br />
                </table>
                <!-- <button @click="${this.postData}">Store Data</button> -->
                
                      <center><button class="button"  @click=${
                        this.click
                      }  ><b>Submit</b></button></center>
                    

          </div>
          <slot></slot>

          
      

    `;
  }

  static get styles() {}

  click() {
    console.log(this.empForm.value);
    // console.log(this.empForm.empCode.value);
    // console.log(this.empForm.empEmail.value);
    // alert("Your response was submited");
  }

  validateForm(e, type) {
    switch (type) {
      case "empName":
        {
          // console.log(this.empForm.name.isValidName);
          if (
            this.empForm.name.value === "" ||
            this.empForm.name.value.length > 6
          ) {
            const newName = {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "Name is too short",
            };
            // console.log(this.empForm.name.errorMessage);
            this.empForm = {
              ...this.empForm,
              name: newName,
            };
            console.log(this.empForm.name.value.errorMessage);
          } else {
            this.empForm = {
              ...this.empForm,
              name: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      //  else {
      //       this.empForm.name = { value: `${e.target.value}`, isValidName: true, errorMessage: '' }};

      case "empCode":
        {
          // console.log(this.empForm.name.isValidName);
          if (
            this.empForm.empCode.value === "" ||
            this.empForm.empCode.value.length >= 5
          ) {
            const newempCode = {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "Please enter a valid emp Emp Code",
            };
            // console.log(this.empForm.name.errorMessage);
            this.empForm = {
              ...this.empForm,
              empCode: newempCode,
            };
            console.log(this.empForm.empCode.value.errorMessage);
          } else {
            this.empForm = {
              ...this.empForm,
              empCode: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "empEmail":
        {
          if (
            this.empForm.email.value === "" ||
            this.empForm.email.value.length > 13
          ) {
            const newemail = {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "Please enter a valid Email",
            };
            // console.log(this.empForm.name.errorMessage);
            this.empForm = {
              ...this.empForm,
              email: newemail,
            };
            console.log(this.empForm.email.value.errorMessage);
          } else {
            this.empForm = {
              ...this.empForm,
              email: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "phoneNumber":
        {
          const phoneNumber = /^\d{10}$/;
          if (
            this.empForm.phone.value === "" ||
            this.empForm.phone.value.length > 10
          ) {
            const newphone = {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "Please enter a valid Phone number",
            };
            // console.log(this.empForm.name.errorMessage);
            this.empForm = {
              ...this.empForm,
              phone: newphone,
            };
            console.log(this.empForm.phone.value.errorMessage);
          } else {
            this.empForm = {
              ...this.empForm,
              phone: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;
      case "AddressLine1":
        {
          if (
            this.empForm.address1.value === "" ||
            this.empForm.address1.value.length > 1
          ) {
            const newaddress1 = {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "Address Line 1 is required",
            };
            // console.log(this.empForm.name.errorMessage);
            this.empForm = {
              ...this.empForm,
              address1: newaddress1,
            };
            console.log(this.empForm.address1.value.errorMessage);
          } else {
            this.empForm = {
              ...this.empForm,
              address1: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;
      case "Zip": {
        const Zip = /^\d{6}$/;
        if (
          this.empForm.pin.value === "" ||
          this.empForm.pin.value.length > 5
        ) {
          const newPin = {
            value: `${e.target.value}`,
            isValidName: false,
            errorMessage: "Please enter a valid Pin",
          };
          console.log(this.empForm.pin.value.errorMessage);
          this.empForm = {
            ...this.empForm,
            pin: newPin,
          };
          console.log(this.empForm.pin.value.errorMessage);
        } else {
          this.empForm = {
            ...this.empForm,
            pin: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
      }
    }
  }
}

window.customElements.define("employee-form", EmployeeForm);
