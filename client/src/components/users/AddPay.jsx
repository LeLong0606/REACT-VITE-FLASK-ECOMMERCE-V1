// eslint-disable-next-line no-unused-vars
import React from 'react'
import './css/AddPay.css'


const AddPay = () => {
  return (
    <div>
        <section className="gradient-custom">
        <div className="container my-5 py-5">
            <div className="row d-flex justify-content-center py-5">
            <div className="col-md-7 col-lg-5 col-xl-4">
                <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-4">
                    <form>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div data-mdb-input-init="" className="form-outline">
                        <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            // eslint-disable-next-line react/no-unknown-property
                            siez={17}
                            placeholder="1234 5678 9012 3457"
                            minLength={19}
                            maxLength={19}
                        />
                        <label className="form-label" htmlFor="typeText">
                            Card Number
                        </label>
                        </div>
                        <img
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        alt="visa"
                        width="64px"
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div data-mdb-input-init="" className="form-outline">
                        <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            // eslint-disable-next-line react/no-unknown-property
                            siez={17}
                            placeholder="Cardholder's Name"
                        />
                        <label className="form-label" htmlFor="typeName">
                            Cardholder is Name
                        </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pb-2">
                        <div data-mdb-input-init="" className="form-outline">
                        <input
                            type="text"
                            id="typeExp"
                            className="form-control form-control-lg"
                            placeholder="MM/YYYY"
                            size={7}
                            minLength={7}
                            maxLength={7}
                        />
                        <label className="form-label" htmlFor="typeExp">
                            Expiration
                        </label>
                        </div>
                        <div data-mdb-input-init="" className="form-outline">
                        <input
                            type="password"
                            id="typeText2"
                            className="form-control form-control-lg"
                            placeholder="●●●"
                            size={1}
                            minLength={3}
                            maxLength={3}
                        />
                        <label className="form-label" htmlFor="typeText2">
                            Cvv
                        </label>
                        </div>
                        <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-info btn-lg btn-rounded"
                        >
                        <i className="fas fa-arrow-right" />
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
   
    </div>
  )
}

export default AddPay
