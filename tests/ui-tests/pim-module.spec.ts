import{test, expect} from '../src/fixtures/hooks-fixture';
import pimModuleData from '../../data/pim-module-data.json';

test('[PIM] Verify that a new employee is successfully created under the PIM module',{
    tag:['@SMOKE','@REGRESSION'],
    annotation:{
        type:'Test Case Link',
        description:'Link'
    }
}, async({gotoUrl, leftNavigationPage, pimPage})=>{
    await test.step('Open PIM module', async()=>{
        await leftNavigationPage.openPimModule();
    })
    await test.step('Fill Employee Details', async()=>{
        await pimPage.addEmployee(pimModuleData.first_name, pimModuleData.middle_name, pimModuleData.last_name);
    })
    await test.step('Verify Newly Added Employee', async()=>{
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
    })
    

})