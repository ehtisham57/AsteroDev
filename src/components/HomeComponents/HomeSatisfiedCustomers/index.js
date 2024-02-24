import React from 'react'
import "./index.css"
import cus01 from "./assets/customer01.png"
import CustomerCard from '../../allComponents/CustomerCard'


export const HomeSatisfiedCustomers = () => {
    return (
        <div className='HomeSatisfiedCustomers container-fluid'>
            <div className='mx-auto d-flex justify-content-center container'>
                <div className='HomeSatisfiedCustomersHeading'>
                    <h1>
                        Words from Satisfied < br /> Customers
                    </h1>
                </div>
            </div>
            <div>
                <div className='HomeCustomerCard row container mx-auto '>
                    <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />
                    <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />

                    <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />
                     <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />
                     <CustomerCard
                        heading="“GOOD QUALITY”"
                        src={cus01}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nisi vitae condimentum suscipit. Quisque fermentum libero nec turpis ornare, et fermentum nulla placerat. Curabitur eros enim, congue sed aliquam eu, tempus ut lorem. Nam vitae nulla ornare metus interdum gravida et id velit. Vestibulum a arcu euismod"
                        username="goldberg"
                        detail="customer"
                    />
                </div>
            </div>
        </div>
    )
}
