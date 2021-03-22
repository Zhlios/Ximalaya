import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Touchable from '@/components/Touchable';

const mapStateProps = ({createHorse, loading}: RootState) => ({
  ...createHorse,
});

const connector = connect(mapStateProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class CreateHorse extends Component<IProps> {
  onPress = () => {
    const {dispatch, navigation} = this.props;
    dispatch({
      type: 'createHorse/saveHorse',
      params: {},
      callback: () => {
        navigation.pop();
      },
    });
  };

  onChange = (text: string, key: string) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'createHorse/changeValue',
      params: {
        text: text,
        key: key,
      },
    });
  };

  render() {
    const {data, alertMsg} = this.props;
    console.log(data, 'kkkkkk');
    return (
      <ScrollView style={styles.content}>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>赛马名称</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.horseName}
            onChangeText={(text) => {
              this.onChange(text, 'horseName');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>骑手</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.jockey}
            onChangeText={(text) => {
              this.onChange(text, 'jockey');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>驯养师</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.trainer}
            onChangeText={(text) => {
              this.onChange(text, 'trainer');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>最近6次成绩</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.run}
            onChangeText={(text) => {
              this.onChange(text, 'run');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>体重</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.weight.toString()}
            onChangeText={(text) => {
              this.onChange(text, 'weight');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>draw</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.draw.toString()}
            onChangeText={(text) => {
              this.onChange(text, 'draw');
            }}
          />
        </View>

        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>Rtg</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.Rtg}
            onChangeText={(text) => {
              this.onChange(text, 'Rtg');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>Rtg+</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.Rtg_Add}
            onChangeText={(text) => {
              this.onChange(text, 'Rtg_Add');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>gear</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.gear}
            onChangeText={(text) => {
              this.onChange(text, 'gear');
            }}
          />
        </View>
        <View style={styles.creat_item}>
          <Text style={styles.creat_item_left}>priority</Text>
          <TextInput
            style={styles.creat_item_right}
            value={data.priority}
            onChangeText={(text) => {
              this.onChange(text, 'priority');
            }}
          />
        </View>
        {alertMsg.length ? <Text style={styles.altMsg}>{alertMsg}</Text> : null}
        <View style={styles.touch_b}>
          <Touchable style={styles.touch} onPress={this.onPress}>
            <Text style={styles.touch_t}>保存数据</Text>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}

export default connector(CreateHorse);

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  creat_item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomColor: '#DCDFE6',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  creat_item_left: {
    color: '#303133',
    fontSize: 16,
    flex: 1,
  },
  creat_item_right: {
    color: '#606266',
    fontSize: 16,
    flex: 1,
    backgroundColor: '#EBEEF5',
    height: 30,
  },
  touch_b: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#F56C6C',
    borderRadius: 8,
    marginTop: 20,
  },
  touch_t: {
    color: 'white',
    fontSize: 18,
  },
  altMsg: {
    marginTop: 20,
    color: '#F56C6C',
    fontSize: 16,
    textAlign: 'center',
  },
});
