import { View, Text , Button} from 'react-native'
import React , {useState}from 'react'
import Header from '../Components/Header'
import DatePicker from 'react-native-date-picker'
export default function Detail() {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    // console.log(date);

    return (
        <View>
            <Header />
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}