'use strict'
function LinkedList() {
  let length = 0
  let head = null

  const Node = function (info) {
    this.info = info
    this.next = null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.add = function (info) {
    const node = new Node(info)
    if (head === null) {
      head = node
    } else {
      let currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    length++
  }

  this.remove = function (info) {
    let currentNode = head
    let previousNode

    if (currentNode.info === info) {
      head = currentNode.next
    } else {
      while (currentNode.info !== info) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      previousNode.next = currentNode.next
    }
    length--
  }
}
