import { FillFormHealth } from "../pages/fillformHealth";

const healthForm = new FillFormHealth ();

describe("HealthCareTests",() => {
    beforeEach(() => {
        healthForm.goToHealthCare()
        
    })
    it("Separar cita medica correctamente", () => {
        healthForm.goLoginPage()
        healthForm.fillLogin()
        healthForm.fillMakeAppointment()
        healthForm.validateAppointment()
    });





})