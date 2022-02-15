import logo from './logo.svg';
import './App.css';

import { Grommet, Box, Heading, Tabs, Tab, Image, Select ,Text ,Button,Layer} from 'grommet'; 

import { grommet } from 'grommet/themes';

import { LineChart } from 'grommet-controls/chartjs';
import { statscovid, statlicenciement, statCasContact } from './data/data';

import React from 'react';
import { deepMerge } from 'grommet/utils';
import { FormClose } from 'grommet-icons';

const customTheme = deepMerge(grommet, {
  layer: {
    border: {
      radius: 'large',
      intelligentRounding: true,
    },
  },
});

export const ClassicWidget= ({ data }) => (
<Box round pad="medium" direction="column" background="#EEEEEE"> 
<Box height="xsmall" width="xsmall">
<Image fit="cover" src={data.icon_url}/> 
 </Box>
<Heading alignSelf="center" level="2" margin="none" size="small"> {data.title} </Heading>
<Text alignSelf="center" size="90px" weight="bold"> {data.data} </Text> 

<Text alignSelf="left"> {data.description} </Text> 
 </Box>
);
 
export const ChartWidget= ({ data }) => (
<Box pad="medium" direction="column" background="#EEEEEE"> 
<Heading level={2}>{data.title}</Heading>
<Text alignSelf="center" size="20px" weight="bold"> {data.description} </Text>
<LineChart data={data.data} />
</Box>
);

export const RoundLayer = () => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState();
  const [full, setFull] = React.useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);
  return (
    <Grommet theme={customTheme} full>
      <Box fill align="center" justify="center" gap="medium" onClick={onOpen}>
      <ClassicWidget data={ statlicenciement } />
        
      </Box>
      {open && (
        <Layer
          full={full}
          position={position}
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            pad="medium"
            gap="small"
            width={{ min: 'medium' }}
            height={{ min: 'small' }}
            fill
          > 
            <Button alignSelf="end" icon={<FormClose />} onClick={onClose} />

            <ChartWidget data={ statCasContact }/>

          </Box>
        </Layer>
      )}
    </Grommet>
  );};

             const AppBar = (props) => (
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                elevation='medium'
                style={{ zIndex: '1' }}
                {...props}
            />
        ); 
             const MyMenu = (props) => (
        		<Tabs>
			<Tab  title="pageOne">
					<Box name="widgetWrapperOne" 
 width="100"> 
<ClassicWidget data={ statscovid }/>

					</Box>
			</Tab>
			<Tab  title="pageTwo">
					<Box name="widgetWrapperOne" 
 width="100"> 
<ClassicWidget data={ statlicenciement }/>
<ChartWidget data={ statCasContact }/>

					</Box>
			</Tab >
      <Tab title="page3">
        
        <Box name="widgetWrapperOne"  width="100"> 
        
          <RoundLayer/>
			  </Box>

      </Tab>
		</Tabs>

        ); 
            
            const myTheme = {
                global: { 
                    colors: {black: '#000000',
green: '#00FF00',
white: '#FFFFFF',
}}}

            function App() {
                return(
                    <Grommet plain>
                        <Box fill>
                            
        <AppBar>
            <Heading level='3' margin='none'>test</Heading>
        </AppBar> 
                        </Box>
                        
        <MyMenu></MyMenu> 
        
                    </Grommet>
                );
            }
            export default App;
